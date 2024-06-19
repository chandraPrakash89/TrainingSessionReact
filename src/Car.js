function Car(props) {
    return (
      <div>
      <h1>Car</h1>
      <h2>{props.color}</h2>
      <h2>{props.price || "coming soon"}</h2>
    </div>
    );
  }
  
  export default Car;