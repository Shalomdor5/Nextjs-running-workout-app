"use client";

inport { useState } from "react";

export default function WorkoutForm({ onAdd }: any) {
  const [name, setName] = useState("");
  const [distance, setDistance] = useState(0);
WorkoutForm.tsx

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>צור אימון חדש</h3>

      <input
        placeholder="שם אימון"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="מרחק בק"מ"
        value={distance}
        onChange={(e) => setDistance(Number(e.target.value))}
      />

      <button
        onClick={() => {
          onAdd({ name, distance });
          setName("");
          setDistance(0);
        }}
      >
        הוסף אימון
      </button>
    </div>
  );
}
