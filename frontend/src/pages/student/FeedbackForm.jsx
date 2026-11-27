import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function FeedbackForm() {
  const { id } = useParams();

  const [teaching, setTeaching] = useState("");
  const [communication, setCommunication] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedback = {
      formId: id,
      teaching,
      communication,
      knowledge,
      comment,
    };

    console.log(feedback);
    alert("Feedback submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">Faculty Feedback Form</h1>

        <p className="text-gray-500 mb-6">
          Please rate the faculty based on your experience.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block font-semibold mb-2">
            1. How is the faculty's teaching?
          </label>
          <select
            value={teaching}
            onChange={(e) => setTeaching(e.target.value)}
            required
            className="w-full border p-3 rounded-lg mb-5"
          >
            <option value="">Select rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Average</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          <label className="block font-semibold mb-2">
            2. How is the faculty's communication?
          </label>
          <select
            value={communication}
            onChange={(e) => setCommunication(e.target.value)}
            required
            className="w-full border p-3 rounded-lg mb-5"
          >
            <option value="">Select rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Average</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          <label className="block font-semibold mb-2">
            3. How is the faculty's subject knowledge?
          </label>
          <select
            value={knowledge}
            onChange={(e) => setKnowledge(e.target.value)}
            required
            className="w-full border p-3 rounded-lg mb-5"
          >
            <option value="">Select rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Average</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          <label className="block font-semibold mb-2">
            Additional Comments
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your feedback here..."
            className="w-full border p-3 rounded-lg mb-5"
            rows="4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>

        <Link to="/student" className="block text-center text-blue-600 mt-5">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default FeedbackForm;
