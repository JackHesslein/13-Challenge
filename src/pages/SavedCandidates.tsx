import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface.tsx';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Get the saved candidates from local storage (or any other storage mechanism)
    const storedCandidates = localStorage.getItem('savedCandidates');
    
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const handleRemove = (username: string) => {
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.username !== username
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  if (savedCandidates.length === 0) {
    return <div>No candidates saved yet.</div>;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        {savedCandidates.map((candidate) => (
          <div key={candidate.username} style={{ marginBottom: '20px' }}>
            <h3>{candidate.name}</h3>
            <img
              src={candidate.avatar}
              alt={candidate.username}
              width={100}
              height={100}
            />
            <p>Username: {candidate.username}</p>
            <p>Location: {candidate.location}</p>
            <p>Company: {candidate.company}</p>
            <p>
              <a
                href={candidate.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </p>
            <button onClick={() => handleRemove(candidate.username)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SavedCandidates;