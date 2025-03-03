import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface.tsx';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + candidates.length) % candidates.length
    );
  };

  if (candidates.length === 0) {
    return <div>Loading...</div>;
  }

  const currentCandidate = candidates[currentIndex];

  return (
    <div>
      <h1>CandidateSearch</h1>
      <article>
        <h2>{currentCandidate.username}</h2>
        <img
          src={currentCandidate.avatar}
          alt={currentCandidate.username}
          width={100}
          height={100}
        />
        <p>{currentCandidate.name}</p>
        <p>{currentCandidate.location}</p>
        <p>{currentCandidate.company}</p>
        <p>
          <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </p>
      </article>
      <div>
        <button onClick={handlePrev}>-</button>
        <button onClick={handleNext}>+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;