import { VercelRequest, VercelResponse } from '@vercel/node';
import gplay from 'google-play-scraper';

export default (_req: VercelRequest, res: VercelResponse) => {
  const id =  String(_req.query.id);

  console.log(`id: ${id}`);

  let responseData = null;
  gplay.app({appId: id}).then((data) => {
    responseData = data;
    res.status(200).send(responseData);
  }, console.log);
};
