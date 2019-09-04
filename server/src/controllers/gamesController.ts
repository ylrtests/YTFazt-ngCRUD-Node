import {Request, Response } from 'express';
import pool from '../database';
import { request } from 'https';

class GamesController{
    
    public async list(req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM games');
        res.json({
            text: 'Listing games',
            games: games
        });
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id])
        res.json({
            text: 'Getting a game...',
            game: game[0] ? game[0] : 'Game not found'
        })
    }

    public async create (req: Request, res: Response): Promise<void>{
        //console.log(req.body);
        await pool.query('INSERT INTO games set ?', [req.body])
        res.json({text: 'Game saved.'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const { id } = req.params;
        await pool.query("DELETE FROM games where id = ?",[id])
        res.json({
            text: 'Game was deleted.'
        });
    }

    public async update(req: Request, res: Response):Promise<void>{
        const { id } = req.params;
        const game = req.body;
        await pool.query("UPDATE games SET ? WHERE id = ?", [game, id]);
        res.json({
            text: 'Game has been updated.',
            id: req.params.id
        });
    }
}

export const gamesController = new GamesController();