import React, { useState, useEffect } from 'react';

function GitHubData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users?since=${(page-1)*12}`); // Sayfa numarasını kullanarak doğru veri aralığını alıyoruz
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData); // Mevcut verilere yeni verileri ekliyoruz
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [page]); // Sayfa numarası değiştiğinde yeniden veri al

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}

export default GitHubData;
