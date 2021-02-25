function index({ data }) {
  return (
    <div style={{ margin: "50px" }}>
      <p>GET testimonails</p>
      {data.map((d) => (
        <div key={d.id}>
          <p>{d.id}</p>
          <p>{d.name}</p>
          <p>{d.designation}</p>
          <p>{d.avatar}</p>
          <p>{d.message}</p>
          <img src={d.avatar} alt="" />
          <p>{d.rating}</p>
          <p>{d.lorem}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api`);
  const data = await res.json();

  return { props: { data } };
}

export default index;
