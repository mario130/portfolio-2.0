import { projects } from '../../../projects';

export default function handler(req, res) {
  res.status(200).json({projects})
}