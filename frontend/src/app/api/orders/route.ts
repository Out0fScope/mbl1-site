import Api from '_api/index';
import { Collection, IOrder } from '_api/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    let imageResult: string | any = null;

    const formData = await req.formData();
    const raw = formData.get('data') as string;
    const [order]: IOrder[] = JSON.parse(raw);
    const file = formData.get('file') as File | null;

    if (file) {
      imageResult = await Api.uploadFile(file);
    }

    const payload = [
      {
        ...order,
        image: imageResult,
      },
    ];

    // 3. отправляем
    await Api.postData(Collection.Orders, payload);

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
