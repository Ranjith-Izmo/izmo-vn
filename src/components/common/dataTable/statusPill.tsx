export const StatusPill = ({ status }: { status: string }) => {
  let color = "#259800";
  if (status === "Aging Stock" || status === "Slow Moving") color = "#C32026";
  if (status === "Average") color = "#F2B005";

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "end",
        background: "#ffffff",
        color: `${color}`,
        padding: "4px 12px",
        borderRadius: "40px",
        border: `1px solid ${color}`,
        width: "fit-content",
      }}
    >
      <div
        style={{
          width: "8.52px",
          height: "8.52px",
          backgroundColor: `${color}`,
          borderRadius: "100%",
        }}
      ></div>
      <span
        style={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {status}
      </span>
    </div>
  );
};
