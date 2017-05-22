get '/users' do
  "this is the /users route"
end

get '/users/new' do
  erb :'/users/new'
end

post '/users' do
  @user = User.new(params["user"])
  if @user.save
    session[:user_id] = @user.id
    redirect "/users/#{@user.id}"
  else
    @errors = @user.errors.full_messages
    erb :'/users/new'
  end
end

get '/users/:id' do
  @user = User.find_by(id: params[:id])
  erb :'/users/show'
end

get '/users/:id/edit' do
  "this is the /users/:id/edit route"
end

put '/users/:id' do
  "this is the /users/:id put route"
end

delete '/users/:id' do
  "this is the /users/:id delte route"
end
