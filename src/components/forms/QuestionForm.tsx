import { Button } from "@/components/ui/button";

const QuestionForm = () => {
  return (
    <form className="gap-4 flex flex-col w-2/3 md:w-1/3 mx-auto py-8">
      <label className="text-white" htmlFor="">
        test
      </label>
      <input
        className="border border-white rounded-2xl p-2 bg-white text-mh-darkBlue"
        type="text"
      />
      <input
        className="border border-white rounded-2xl p-2 bg-white text-mh-darkBlue"
        type="text"
      />
      <input
        className="border border-white rounded-2xl p-2 bg-white text-mh-darkBlue"
        type="text"
      />
      <div className="flex items-center justify-end">
        <Button className="w-1/3" variant="outline">
          submit
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
