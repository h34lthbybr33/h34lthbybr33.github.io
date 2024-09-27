import { inspect } from 'util';
import { Request, GetParams, OutstaticApi, PostParams } from 'outstatic';

export const GET = async (req: Request, { params }: GetParams) => {
  console.log(`GET /api/outstatic`, inspect(params));
  return await OutstaticApi.GET(req, { params });
};

export const POST = async (req: Request, { params }: PostParams) => {
  console.log(`POST /api/outstatic`, inspect(params));
  return await OutstaticApi.POST(req, { params });
};
