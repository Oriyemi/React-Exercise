// 8. GitHub profile finder — handling 404s gracefully
import React, { useState } from "react";

function Profiler() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProfile = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username");
      return;
    }

    setLoading(true);
    setError(null);
    setProfile(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username.trim())}`,
      );

      if (response.status === 404) {
        throw new Error("GitHub user not found");
      }

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setProfile(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          GitHub Profile Finder
        </h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
          />

          <button
            onClick={getProfile}
            className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500 active:scale-95"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="mt-6 text-center text-cyan-400">Loading profile...</p>
        )}

        {error && (
          <p className="mt-6 rounded-xl bg-red-500/10 p-3 text-center text-red-400">
            {error}
          </p>
        )}

        {profile && !loading && !error && (
          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center">
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="mx-auto h-24 w-24 rounded-full border-4 border-cyan-500"
            />

            <h2 className="mt-4 text-2xl font-bold text-white">
              {profile.name || profile.login}
            </h2>

            <p className="mt-1 text-cyan-400">@{profile.login}</p>

            <p className="mt-4 text-slate-300">
              {profile.bio || "No bio available"}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-700 p-3">
                <p className="text-sm text-slate-400">Repos</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {profile.public_repos}
                </p>
              </div>

              <div className="rounded-xl bg-slate-700 p-3">
                <p className="text-sm text-slate-400">Followers</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {profile.followers}
                </p>
              </div>

              <div className="rounded-xl bg-slate-700 p-3">
                <p className="text-sm text-slate-400">Following</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {profile.following}
                </p>
              </div>
            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-500"
            >
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profiler;
