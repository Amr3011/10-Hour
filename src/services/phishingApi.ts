import { Client } from "@gradio/client";

const SPACE_ID = "iof2eagle/emails_phising";
const PREDICT_ENDPOINT = "/predict";

export type PredictionResult = {
  prediction: string;
  phishingConfidence: number;
  safeConfidence: number;
};

export const predictPhishing = async (
  senderEmail: string,
  emailText: string,
): Promise<PredictionResult> => {
  const client = await Client.connect(SPACE_ID);
  const result = await client.predict(PREDICT_ENDPOINT, {
    sender_email: senderEmail,
    email_text: emailText,
  });

  const [prediction, phishingConfidence, safeConfidence] = result.data as [
    string,
    number,
    number,
  ];

  return {
    prediction,
    phishingConfidence,
    safeConfidence,
  };
};
