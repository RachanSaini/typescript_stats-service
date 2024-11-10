import express from 'express';
import { postCourseStat, getCourseLifetimeStats, getSingleSessionStat } from '../controller/courseController';

const router = express.Router();

router.post('/courses/:courseId', postCourseStat);
router.get('/courses/:courseId', getCourseLifetimeStats);
router.get('/courses/:courseId/sessions/:sessionId', getSingleSessionStat);

export default router;
