const MemberController = {
  post: async (req, res, next) => {
    try {
      res.status(200).json({ ok: req.params.id });
    } catch (error) {
      next(error);
    }
  },
  get: async (req, res, next) => {
    try {
      res.status(200).json({ teste: req.params.id });
    } catch (error) {
      next(error);
    }
  },
};

export default MemberController;
