import { Request, Response } from 'express';
import { createSessionStat, getCourseStats, getSessionStat } from '../services/statService';

export const postCourseStat = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const { sessionId, totalModulesStudied, averageScore, timeStudied } = req.body;
    const userId = req.header('userId') as string;

    const sessionStat = await createSessionStat({
      sessionId,
      userId,
      courseId,
      totalModulesStudied,
      averageScore,
      timeStudied,
    });

    res.status(201).json(sessionStat);
  } catch (error) {
    console.error("Error saving session stats:", error);
    res.status(500).json({ error: 'Error saving session stats' });
  }
};

export const getCourseLifetimeStats = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = req.header('userId') as string;
    const courseStats = await getCourseStats(courseId, userId);
    res.status(201).json(courseStats);
  } catch (error) {
    console.error("Error retrieving course stats:", error);
    res.status(500).json({ error: 'Error retrieving course stats' });
  }
};

export const getSingleSessionStat = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const sessionStat = await getSessionStat(sessionId);
    res.status(200).json(sessionStat);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving session stats' });
  }
};
