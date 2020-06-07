class Student < ApplicationRecord
    has_many :periods, through: :students_periods
    has_many :students_periods
    has_many :teachers, through: :registrations
    has_many :registrations
    has_many :assessments
end
