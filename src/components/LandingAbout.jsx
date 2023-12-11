export default function LandingAbout() {
  return (
    <>
      <h2 className="text-2xl font-medium">
        Empowering Lives, Nourishing Souls
      </h2>
      <p className="mt-3 text">
        {`At VitalityVault, we are your partners in wellness. Our mission is simple: provide personalized, holistic health solutions for busy lives. Join us and start your journey to a healthier, happier you.`}
      </p>

      <h3 className="mt-3 mb-3 text-xl font-medium">Our Approach</h3>

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center p-4 rounded justify-center max-w-[320px] aspect-square shadow-xl">
          <LeafIcon />
          <h4 className="mt-4 mb-2 text-lg font-semibold">Holistic Wellness</h4>
          <p className="text-center">
            We embrace a comprehensive approach to health, addressing the mind,
            body, and spirit.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 rounded justify-center max-w-[320px] aspect-square shadow-xl">
          <HandshakeIcon />
          <h4 className="mt-4 mb-2 text-lg font-semibold">Community Support</h4>
          <p className="text-center">
            Join a community of like-minded individuals on a shared journey to
            wellness.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 rounded justify-center max-w-[320px] aspect-square shadow-xl">
          <LightBulbIcon />
          <h4 className="mt-4 mb-2 text-lg font-semibold">
            Personalized Guidance
          </h4>
          <p className="text-center">
            Our expert team is committed to crafting personalized plans tailored
            to your unique needs.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 rounded justify-center max-w-[320px] aspect-square shadow-xl">
          <BoltIcon />
          <h4 className="mt-4 mb-2 text-lg font-semibold">
            Seamless Convenience
          </h4>
          <p className="text-center">
            Designed for busy lives, our platform offers convenient online
            solutions for your wellness journey.
          </p>
        </div>
      </div>
    </>
  );
}

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-emerald-900"
      viewBox="0 0 512 512"
    >
      !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License
      - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
      <path
        fill="currentColor"
        d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-8 text-emerald-900"
      viewBox="0 0 640 512"
    >
      !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License
      - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
      <path
        fill="currentColor"
        d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
      />
    </svg>
  );
}

function LightBulbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-8 text-emerald-900"
      viewBox="0 0 384 512"
    >
      !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License
      - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
      <path
        fill="currentColor"
        d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-8 text-emerald-900"
      viewBox="0 0 448 512"
    >
      !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License
      - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
      <path
        fill="currentColor"
        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
      />
    </svg>
  );
}
