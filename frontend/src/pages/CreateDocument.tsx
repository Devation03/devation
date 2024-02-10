import { ChangeEvent, useState } from "react";
import { Loader2Icon } from "../icons/lucide-react";
import { Text } from "../components/ui/typography";

export const CreateDocument = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleOnChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) => {
    switch (type) {
      case "content":
        setContent(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex w-full items-center justify-end gap-2">
        <Loader2Icon className="animate-spin" size="xs" />
        <Text text="Saving" />
      </div>
      <div className="border rounded-sm">
        <input
          placeholder="Document title..."
          className="w-full h-full active:outline-none outline-none rounded-md p-4 text-lg"
          type="text"
          value={title}
          onChange={(e) => handleOnChange(e, "title")}
        />
      </div>
      <div className="w-full h-[85vh] border rounded-sm">
        <textarea
          value={content}
          placeholder="Document body..."
          onChange={(e) => handleOnChange(e, "content")}
          className="text-gray-500 w-full h-full p-4 outline-none active:outline-none rounded-md text-sm"
          name=""
          id=""
          cols={30}
          rows={10}
        />
      </div>
    </div>
  );
};
