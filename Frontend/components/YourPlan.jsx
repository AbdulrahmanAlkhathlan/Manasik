import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import "./css/UmrahPlan.css";

const removeUndefined = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));

const YourPlan = ({
  startDate,
  endDate,
  budget,
  transportation,
  selectedCity,
  selectedHistoricalSites,
  travelingWith,
  restNeeds,
  preferredPace,
  activityTimePreference,
  OpenAIMessages,
}) => {
  const [plan, setPlan] = useState(null);
  const [currentDay, setCurrentDay] = useState(0);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const loadPlan = async () => {
      if (OpenAIMessages) {
        const newPlan = {
          startDate,
          endDate,
          budget,
          transportation,
          selectedCity,
          selectedHistoricalSites,
          travelingWith,
          restNeeds,
          preferredPace,
          activityTimePreference,
          messages: OpenAIMessages,
        };

        setPlan(newPlan);
        localStorage.setItem("yourPlan", JSON.stringify(newPlan));

        if (user) {
          const cleanedPlan = removeUndefined(newPlan);
          await setDoc(doc(db, "plans", user.uid), cleanedPlan);
        }

      } else {
        if (user) {
          const docRef = doc(db, "plans", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setPlan(docSnap.data());
            return;
          }
        }

        const saved = localStorage.getItem("yourPlan");
        if (saved) {
          setPlan(JSON.parse(saved));
        }
      }
    };

    loadPlan();
  }, [user, OpenAIMessages, startDate, endDate]);

  const handleDeletePlan = async () => {
    localStorage.removeItem("yourPlan");
    if (user) {
      await deleteDoc(doc(db, "plans", user.uid));
    }
    alert("Plan deleted!");
    navigate("/home");
  };

  if (!plan) {
    return <p style={{ textAlign: "center" }}>No saved plan found.</p>;
  }

  const { messages } = plan;
  const splitPlan = messages?.[0]?.split("[END OF PAGE]") || [];
  const isValidDate = (d) => d instanceof Date && !isNaN(d);

  const parseDate = (d) => {
    if (!d) return null;
    if (d.toDate && typeof d.toDate === "function") {
      return d.toDate();
    }
    return new Date(d);
  };

  const start = parseDate(plan.startDate);
  const end = parseDate(plan.endDate);


  let tripDuration = null;
  if (isValidDate(start) && isValidDate(end)) {
    tripDuration = Math.round((end - start) / (1000 * 60 * 60 * 24));
  };

  const handleNextDay = () => {
    if (currentDay < splitPlan.length - 1) {
      setCurrentDay(currentDay + 1);
    }
  };

  const handlePreviousDay = () => {
    if (currentDay > 0) {
      setCurrentDay(currentDay - 1);
    }
  };

  return (
    <div className="umrah-plan-container">
      <h2>Your Saved Umrah Plan</h2>
      <p>
        {tripDuration !== null
          ? `${tripDuration} days (${start.toDateString()} - ${end.toDateString()})`
          : "Invalid trip dates"}
      </p>

      <div className="ai-plan-output">
        <h3>Plan Details</h3>
        {splitPlan.length > 0 ? (
          <div className="markdown-output">
            <ReactMarkdown>{splitPlan[currentDay]}</ReactMarkdown>
          </div>
        ) : (
          <p style={{ color: "red" }}>
            ⚠️ No content generated. Please try again.
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {currentDay > 0 && (
          <button onClick={handlePreviousDay}>Previous Day</button>
        )}
        {currentDay < splitPlan.length - 1 && (
          <button onClick={handleNextDay}>Next Day</button>
        )}
      </div>

      {currentDay === splitPlan.length - 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <button onClick={handleDeletePlan} className="delete-plan">
            Delete Plan
          </button>
          <button onClick={() => navigate("/planner")}>Plan Again</button>
        </div>
      )}
    </div>
  );
};

export default YourPlan;
