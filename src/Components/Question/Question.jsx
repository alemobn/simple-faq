import '../../index.css';
import './Question.css';

function Question({ title, p1, p2, item1, item2, item3 }) {
  return (
    <>
      <section className='questions'>
        <h2>{title}</h2>
        <p>{p1}</p>
        <ol>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ol>
        <p>{p2}</p>
      </section>
    </>
  );
}

export default Question;
