import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface SessionStatAttributes {
  sessionId: string;
  userId: string;
  courseId: string;
  totalModulesStudied: number;
  averageScore: number;
  timeStudied: number;
}

interface SessionStatCreationAttributes extends Optional<SessionStatAttributes, 'sessionId'> {}

class SessionStat extends Model<SessionStatAttributes, SessionStatCreationAttributes>
  implements SessionStatAttributes {
  public sessionId!: string;
  public userId!: string;
  public courseId!: string;
  public totalModulesStudied!: number;
  public averageScore!: number;
  public timeStudied!: number;
}

SessionStat.init(
  {
    sessionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    totalModulesStudied: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    averageScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    timeStudied: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SessionStat',
  }
);

export default SessionStat;