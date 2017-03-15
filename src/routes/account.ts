import { Router, Request, Response, NextFunction } from 'express';

export class accountRouter {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    public register(req: Request, res: Response, next: NextFunction) {
        res.send('Implement Registration Process');
    }

    public login(req: Request, res: Response, next: NextFunction) {
        res.send('Implement Login Process');
    }

    public forgotPassword(req: Request, res: Response, next: NextFunction) {
        res.send('Implement forgotPassword Process');
    }

    public changePassword(req: Request, res: Response, next: NextFunction) {
        res.send('Implement changePassword Process');
    }

    public unlockAccount(req: Request, res: Response, next: NextFunction) {
        res.send('Implement unlockAccount Process');
    }

    init() {
        this.router.get('/register', this.register);
        this.router.get('/login', this.login);
        this.router.get('/forgotPassword', this.forgotPassword);
        this.router.get('/changePassword', this.changePassword);
        this.router.get('/unlockAccount', this.unlockAccount);
    }
}

const accountRoutes: accountRouter = new accountRouter();
accountRoutes.init();

export default accountRoutes.router;