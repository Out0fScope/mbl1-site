import { IReview } from '_api/types';

const API_URL = process.env.NEXT_PUBLIC_CLIENT_API_URL;

export const uploadFile = async (file: File) => {
  const formData = new FormData();

  formData.append('file', file);

  const res = await fetch(`${API_URL}/files`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('File upload failed');
  }

  const text = await res.text();

  return text ? JSON.parse(text) : null;
};

export const createOrder = async (payload: any) => {
  console.log(payload);

  const res = await fetch(`${API_URL}/items/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Order create failed');
  }

  const text = await res.text();

  return text ? JSON.parse(text) : null;
};

export const getReviews = async (): Promise<IReview[]> => {
  const res = await fetch(`${API_URL}/items/reviews`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const text = await res.text();

  const data = text ? JSON.parse(text) : null;

  return data?.data ?? [];
};
