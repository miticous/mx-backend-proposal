const MemberController = {
  post: async (req, res, next) => {
    try {
      res.status(200).json({ ok: req.params.id });
    } catch (error) {
      next(error);
    }
  },
};

export default MemberController;
