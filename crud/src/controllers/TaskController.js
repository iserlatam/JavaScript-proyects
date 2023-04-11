function index(req, res){

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tasks', (err, tasks) => {
            if (err){
                res.json(err);
            }
            res.render('tasks/index', { tasks })
        })
    })

    res.render('tasks/index');
}

function create(req, res){
    res.render('tasks/create');
}

function store(req, res){
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tasks SET ?', [data], (err, rows) => {
            res.redirect('/tasks');
        });
    });
}

function destroy(req, res){
    
    const id = req.body.id;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tasks WHERE id = ?', [id], (err, rows) => {
            res.redirect('/tasks');
        })
    })

}

module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy
}