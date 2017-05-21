get "/poems" do
  @poems = Poem.recent
  erb :"/poems/index"
end

post "/poems" do
  @poem = Poem.new(params[:poem])

  if @poem.save
    if request.xhr?
      erb :'poems/_poem', layout: false, locals: { poem: @poem }
    else
      redirect "/poems/#{@poem.id}"
    end
  else
    @errors = @poem.errors.values.flatten
    if request.xhr?
      status 400
      erb :'/_errors', layout: false, locals: {errors: @errors}
    else
      erb :"/poems/new"
    end
  end
end

put "/poems/:id/applauses" do
  poem = Poem.find(params[:id])
  poem.increment!(:applauses)
  if request.xhr?
    applause_report(poem)
  else
    redirect "/poems/#{poem.id}"
  end
end

get "/poems/new" do
  erb :"/poems/new"
end

get "/poems/:id" do
  @poem = Poem.find(params[:id])
  erb :"/poems/show"
end
