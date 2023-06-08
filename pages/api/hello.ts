// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  text: string,
  centerLabel: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data= req.query.customData ?? ''

  res.status(200).json({ text: `채팅 메세지: 커스텀데이터: ${data}`, centerLabel: `센터 라벨입니다 ${data}` })
}
