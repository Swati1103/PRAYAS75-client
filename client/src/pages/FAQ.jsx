export const FAQ = () => {
  return (
    <div className="p-4 bg-blue-50 pb-40">
      <div className="my-16 mt-4 mb-40">
        <p className="text-6xl font-bold ml-80 text-blue-600">
          Frequently Asked Questions
        </p>
        <p className="my-10 ml-96 text-lg font-medium">
          Please reach out to us, if you cannot find satisfactory answer to your
          question.
        </p>
      </div>
      <div>
        <div className="join join-vertical mx-80">
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-2xl font-bold ">
              Who can benefit from Prayas75?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                Prayas75 is dedicated to providing aid and support to
                financially weaker students of BIT Sindri located in Dhanbad,
                Jharkhand, India.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-2xl font-bold ">
              How does Prayas75 use donations?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                All donations made to Prayas75 go towards funding our Jubilee
                Batch Scholarship program under which we distribute Rs. 20,000
                (Approx $250) per year to 10 students of second, third and
                fourth year at BIT Sindri. There is no administrative expenses
                as the core team of Prayas75 picks up that cost personally.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-2xl font-bold ">
              How do I donate to Prayas75 towards Jubilee Batch Scholarship?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                Please click "DONATE" button or "Contact Us".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
