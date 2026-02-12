import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Scaleopal Labs";
export const size = {
    width: 180,
    height: 180,
};
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom right, #1E40AF, #0891B2)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "40px",
                }}
            >
                <div
                    style={{
                        color: "white",
                        fontSize: 120,
                        fontWeight: "bold",
                    }}
                >
                    S
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
