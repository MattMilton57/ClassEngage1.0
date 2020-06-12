class StudentsPeriodsController < ApplicationController
  before_action :set_students_period, only: [:show, :update, :destroy]

  # GET /students_periods
  def index
    @students_periods = StudentsPeriod.all

    render json: @students_periods
  end

  # GET /students_periods/1
  def show
    render json: @students_period
  end

  # POST /students_periods
  def create
    @students_period = StudentsPeriod.create(students_period_params)

    if @students_period.save
      render json: @students_period, status: :created, location: @students_period
    else
      render json: @students_period.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /students_periods/1
  def update
    if @students_period.update(students_period_params)
      render json: @students_period
    else
      render json: @students_period.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students_periods/1
  def destroy
    @students_period.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_students_period
      @students_period = StudentsPeriod.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def students_period_params
      params.require(:students_period).permit(:student_id, :period_id)
    end
end
