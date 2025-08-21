import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'file',
  timestamps: true,
})
export class File extends Model<File> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  size: number;

  @Column
  path: string;

  @Column
  filename: string;
}
