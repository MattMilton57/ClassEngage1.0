class CreateStudentsPeriods < ActiveRecord::Migration[6.0]
  def change
    create_table :students_periods do |t|
      t.references :student, null: false, foreign_key: true
      t.references :period, null: false, foreign_key: true

      t.timestamps
    end
  end
end
