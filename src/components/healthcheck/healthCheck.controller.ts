import { Request, Response } from 'express';
import fs from 'fs';
import httpStatus from 'http-status';

const healthcheck = (req: Request, res: Response) => {
  const pkFile = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  res.status(httpStatus.OK);
  res.send({
    status: 'RUNNING',
    data: new Date().toJSON(),
    version: pkFile.version,
  });
};

export default healthcheck;
