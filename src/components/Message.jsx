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
          <div className="sm:justify-center sm:text-center">
            <div
              className="text-neutral-800 text-[40px] font-medium leading-[60px] pt-16 pl-16 flex sm:flex-col sm:pl-0 sm:justify-center sm:text-[30px] sm:text-center"
              style={fontFam}
            >
              <div className="pl-2 sm:pl-0">
                Drop us message
                <div className="text-stone-500 text-base font-light leading-7 sm:mr-2">
                  Get in touch with us for your wire requirements
                </div>
                <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-4 sm:hidden" />
                <form
                  className="mr-20 mt-10 sm:justify-center sm:text-center"
                  style={fontForm}
                >
                  <Form />
                </form>
              </div>
              <div className="sm:hidden md:hidden">
                <HeadOffice />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Message;
