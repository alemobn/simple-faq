import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import './index.css';
import './App.css';

function App() {
  const questions = [
    {
      title: <span>How can I track my order?</span>,
      p1: <span>You can track your order using the following steps</span>,
      p2: <span>If you encounter any issues, please visit our <a href="#">Help Center.</a></span>,
      item1: <span>Go to the Order <a href="#">Tracking page.</a></span>,
      item2: <span>Enter your order number and email address.</span>,
      item3: <span>Click on the Track Order button to view the current status of your shipment.</span>
    },
    {
      title: <span>What is your return policy?</span>,
      p1: <span>We offer a 30-day return policy on most items. Here are some key points</span>,
      p2: <span>For more detailed information, read our full <a href="#">Return Policy.</a></span>,
      item1: <span><b>Items must be in original condition</b>: Unworn, unused, and unwashed.</span>,
      item2: <span><b>Include original packaging and tags</b>: All items should be returned with their original packaging and tags.</span>,
      item3: <span><b>Proof of purchase:</b> A receipt or proof of purchase is required.</span>
    }
  ];

  return (
    <>
      <Header />

      <section className='content'>
        {questions.map(function (question, index) {
          return (
            <Question
              key={index}
              title={question.title}
              p1={question.p1}
              p2={question.p2}
              item1={question.item1}
              item2={question.item2}
              item3={question.item3}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
