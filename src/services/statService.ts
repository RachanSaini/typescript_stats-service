import SessionStat from '../models/SessionStat';
import sequelize from '../config/database';

interface StatData {
  sessionId: string;
  userId: string;
  courseId: string;
  totalModulesStudied: number;
  averageScore: number;
  timeStudied: number;
}

export const createSessionStat = async (statData: StatData) => {
  return await SessionStat.create(statData);
};

export const getCourseStats = async (courseId: string, userId: string) => {
  const courseStats = await SessionStat.findAll({
    attributes: [
      [sequelize.fn('SUM', sequelize.col('totalModulesStudied')), 'totalModulesStudied'],
      [sequelize.fn('AVG', sequelize.col('averageScore')), 'averageScore'],
      [sequelize.fn('SUM', sequelize.col('timeStudied')), 'timeStudied'],
    ],
    where: { courseId, userId },
  });
  return courseStats[0];
};

export const getSessionStat = async (sessionId: string) => {
  return await SessionStat.findByPk(sessionId);
};
