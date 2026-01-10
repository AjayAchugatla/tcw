'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');

    if (!hasSeenWelcome) {
      setShowWelcome(true);

      setTimeout(() => {
        localStorage.setItem('hasSeenWelcome', 'true');
        setShowWelcome(false);
      }, 2000); // welcome duration
    }

    setChecked(true);
  }, []);

  // Prevent flash while checking localStorage
  if (!checked) return null;

  if (showWelcome) {
    return (
      <div style={{ padding: 40 }}>
        <h1>👋 Welcome!</h1>
        <p>Thanks for visiting for the first time.</p>
      </div>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the detailed page content. ❤️</p>
    </main>
  );
}
