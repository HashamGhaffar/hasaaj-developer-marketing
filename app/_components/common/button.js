"use client";

export default function Button({
  text,
  textColor,
  bgcolor,
  padding,
  radius,
  fontSize,
  fontWeight,
}) {
  return (
    <>
      <button
        style={{
          color: textColor,
          backgroundColor: bgcolor,
          padding: padding,
          borderRadius: radius,
          fontSize: {
            sm: "16px",
            lg: "23px",
          },
          fontWeight: fontWeight,
        }}
        >
        {text}
      </button>
    </>
  );
}
