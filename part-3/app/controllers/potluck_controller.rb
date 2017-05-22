get '/potlucks' do
  @potlucks = Potluck.order(:starts_at)
  erb :'/potlucks/index'
end

get '/potlucks/new' do
  "this is the create potlucks route"
  require_user
  erb :'/potlucks/new'
end

post '/potlucks' do
  @potluck = Potluck.new(params["potluck"])
  if @potluck.save
    redirect "/potlucks/#{@potluck.id}"
  else
    @errors = @potluck.errors.full_messages
    erb :'/potlucks/new'
  end
end

get '/potlucks/:potluck_id' do
  @potluck = Potluck.find_by(id: params[:potluck_id])
  erb :'/potlucks/show'
end
