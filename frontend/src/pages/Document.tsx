import { ChangeEvent, useEffect, useState } from "react";
import useChannel from "../hooks/use-channel";

export const Document = () => {
  const [message, setMessage] = useState("");

  const [collabChannel] = useChannel("collab_room:lobby", {});

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (!collabChannel) return;
    if (!message) return;

    // Send the current text to the channel
    collabChannel.push("edit", { body: message });

    return () => {
      // Cleanup the event listener when the component unmounts
      collabChannel.off("edit");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    if (!collabChannel) return;

    const editMsg = "new_edit";

    // Listen for incoming messages on the channel
    collabChannel.on(editMsg, (res) => {
      setMessage(res.body);
    });

    // Send the current text to the channel
    // collabChannel.push("edit", { body: message });

    return () => {
      // Cleanup the event listener when the component unmounts
      collabChannel.off(editMsg);
    };
  }, [collabChannel]);

  return (
    <div className="w-screen h-screen p-10 flex flex-col gap-4">
      <h1>Edit this document</h1>
      <div className="w-full h-full">
        <textarea
          value={message}
          onChange={handleOnChange}
          className="text-gray-500 w-full h-full p-4 outline-none active:outline-none shadow-lg rounded-md"
          name=""
          id=""
          cols={30}
          rows={10}
        />
      </div>
    </div>
  );
};
