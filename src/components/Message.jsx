import React from "react";
import HeadOffice from "./HeadOffice";
import Form from "./Form";
import Section from "./Section";

const Message = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  const fontForm = {
    fontFamily: "Inter",
  };

  return (
    <>
    <Section color="bg-zinc-100">
      <div className="bg-zinc-100 pb-20">
        <div>
          <div
            className="text-neutral-800 text-[40px] font-medium leading-[60px] pt-16 pl-16 flex"
            style={fontFam}
          >
            <div className="pl-2">
              Drop us message
              <div className="text-stone-500 text-base font-light leading-7">
                Get in touch with us for your wire requirements
              </div>
              <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-4" />
              <form className="mr-20 mt-10" style={fontForm}>
                <Form />
              </form>
            </div>
            <HeadOffice />
          </div>
        </div>
      </div>
      </Section>
    </>
  );
};

export default Message;
