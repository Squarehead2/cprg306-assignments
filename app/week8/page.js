"use client";

import { useUserAuth } from "./_util/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1>Login Page</h1>
      <section>
        {user ? (
          <div>
            <p>Welcome, {user.email}</p>
            <button
              className="text-lg m-2 hover:underline"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              className="text-lg m-2 hover:underline"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
