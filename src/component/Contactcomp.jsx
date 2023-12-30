import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map";
import contactImage from "../../image/contact.jpg"
export default function Contactcomp() {
  const form = useRef();
  const [error, setError] = useState();
  const [mailOk, setMail] = useState();
  const SendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qpmplbn",
        "template_wnyklte",
        form.current,
        "hLykNdv4AgJZDChAV"
      )
      .then(
        (result) => {
          setMail(result.text);
          setError(null);
          e.target.reset();
        },
        (err) => {
          setMail(null);
          setError(err.text);
        }
      );
  };
  return (
    <div>
    
      <div className=" h-screen lg:h-[70vh] bg-cover bg-no-repeat w-full pt-10 pb-2 relative flex justify-center items-center" style={{
        backgroundImage:` url(${contactImage})`
      }}>
        <div className="h-full lg:w-7/12 w-11/12 rounded-xl bg-base-100 opacity-90 absolute lg:-bottom-10">
          <h2 className=" text-xl lg:text-3xl text-center underline font-extrabold">
            Contact info
          </h2>
          <div className="flex lg:flex-row  lg:h-5/6 flex-col-reverse">
            <div className="lg:w-1/2  lg:border-r lg:border-black lg:m-7 px-3 space-y-4 lg:space-y-9  ">
              {/* address  */}
              <div className="flex gap-3 ">
                <svg
                  className="btn btn-circle "
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path d="m102.128 96.851 6.3 14.173a1.75 1.75 0 1 0 3.2-1.422l-6.3-14.173a1.75 1.75 0 1 0-3.2 1.422z" />
                  <path d="m123.1 120.649-17.69-39.811a1.75 1.75 0 0 0-1.6-1.039H83.831C89.219 71.13 93.938 62 96.778 53.651a43.164 43.164 0 0 0 2.657-13.466 35.436 35.436 0 1 0-70.871 0 43.174 43.174 0 0 0 2.657 13.467c2.84 8.353 7.56 17.478 12.948 26.147H24.19a1.75 1.75 0 0 0-1.6 1.039L4.9 120.649a1.75 1.75 0 0 0 1.6 2.461h115a1.75 1.75 0 0 0 1.6-2.461zM32.064 40.186a31.936 31.936 0 1 1 63.871 0 39.8 39.8 0 0 1-2.471 12.34c-3.041 8.945-8.311 18.822-14.24 28.026l-.037.058A194.664 194.664 0 0 1 64 101.136a194.667 194.667 0 0 1-15.188-20.525c-.013-.02-.024-.04-.038-.059-5.929-9.2-11.2-19.081-14.239-28.025a39.812 39.812 0 0 1-2.471-12.341zM9.192 119.61 25.327 83.3H46.4a194.324 194.324 0 0 0 16.29 21.663 1.75 1.75 0 0 0 2.629 0A194.313 194.313 0 0 0 81.6 83.3h21.068l16.135 36.311z" />
                  <path d="M64 58.775a18.592 18.592 0 1 0-18.592-18.591A18.613 18.613 0 0 0 64 58.775zm0-33.684a15.092 15.092 0 1 1-15.092 15.093A15.109 15.109 0 0 1 64 25.092z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p>Baneshwor, kathmandu , Nepal</p>
                </div>
              </div>
              {/* phn */}
              <div>
                <a href="tel:98123456" target="blank">
                  <div className="flex gap-3">
                    <svg
                      className="btn btn-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold">Contact</h3>
                      <p>98123456</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* email  */}
              <div>
                <a href="mailto:shresthasuyog001@gmail.com" target="blank">

              <div className="flex gap-3">
                <svg
                  className="btn btn-circle"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path d="M123.25 24.192c0-.018 0-.034-.005-.052s-.007-.063-.009-.094a1.734 1.734 0 0 0-.083-.408c-.006-.018 0-.037-.011-.055s-.01-.015-.013-.023a1.734 1.734 0 0 0-.227-.407c-.021-.028-.043-.053-.066-.08a1.755 1.755 0 0 0-.31-.294c-.012-.009-.022-.02-.034-.028a1.744 1.744 0 0 0-.414-.2c-.034-.012-.068-.022-.1-.032a1.733 1.733 0 0 0-.474-.073H6.5a1.733 1.733 0 0 0-.474.073c-.035.01-.068.02-.1.032a1.744 1.744 0 0 0-.414.2c-.012.008-.022.019-.034.028a1.755 1.755 0 0 0-.31.294c-.022.027-.045.052-.066.08a1.734 1.734 0 0 0-.227.407c0 .008-.01.015-.013.023s-.005.037-.011.055a1.734 1.734 0 0 0-.083.408c0 .032-.009.063-.009.094s-.005.034-.005.052v79.615c0 .023.006.045.007.068a1.737 1.737 0 0 0 .019.188c.008.051.015.1.027.152a1.74 1.74 0 0 0 .056.179c.017.047.033.094.054.139a1.729 1.729 0 0 0 .093.172c.024.04.048.081.075.119a1.743 1.743 0 0 0 .125.152c.033.036.066.072.1.106.021.019.037.042.059.061s.036.017.052.03a1.736 1.736 0 0 0 .452.263c.035.014.071.022.107.033a1.732 1.732 0 0 0 .488.085c.012 0 .023.006.035.006H121.501c.012 0 .023-.006.034-.006a1.732 1.732 0 0 0 .489-.085c.035-.011.07-.019.1-.033a1.736 1.736 0 0 0 .453-.263c.016-.013.036-.017.052-.03s.038-.042.059-.061c.036-.034.069-.069.1-.106a1.743 1.743 0 0 0 .125-.152c.027-.038.051-.078.075-.119a1.729 1.729 0 0 0 .093-.172c.021-.045.037-.092.054-.139a1.74 1.74 0 0 0 .056-.179c.012-.05.019-.1.027-.152a1.737 1.737 0 0 0 .019-.188c0-.023.007-.045.007-.068zM45.8 60.316l17.058 14.677a1.751 1.751 0 0 0 2.283 0L82.2 60.316l35.512 41.741H10.289zM8.25 99.052V28.007l34.9 30.026zm76.6-41.019 34.9-30.026v71.045zm31.931-32.091L81.276 56.493c-.006.005-.014.008-.02.014l-.019.02L64 71.358 46.763 56.527l-.019-.02-.02-.014-35.507-30.551z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">E-mail</h3>
                  <p>shresthasuyog001@gmail.com</p>
                </div>
              </div>
                </a>

              </div>
              <div>
                <h3 className="text-xl font-bold">Social media</h3>
                <div className="flex gap-5 mt-3">
                  <a href="https://twitter.com/" target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/" target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/index.php" target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 m-7 lg:space-y-9 ">
              <div className=" w-11/12 h-full lg:p-5 lg:space-y-5">
                <h3 className="text-2xl font-bold">Send message</h3>
                {error && (
                  <div className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{error}.</span>
                  </div>
                )}

                <form
                  action=""
                  className="space-y-5 h-full"
                  onSubmit={SendEmail}
                  ref={form}
                >
                  <input
                    type="text"
                    className="input input-sm input-bordered input-primary w-full "
                    placeholder="Your Name"
                    name="user_name"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    className="input input-sm input-bordered input-primary w-full "
                    placeholder="Email"
                    required
                  />
                  <textarea
                    name="message"
                    id="message"
                    className="textarea textarea-primary w-full"
                    placeholder="Type your message"
                  ></textarea>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
              {mailOk && (
                <div className="chat chat-end">
                  <div className="chat-bubble chat-bubble-accent">
                    mail sent
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* map here  */}
      <div>
        <Map></Map>
      </div>
    </div>
  );
}
