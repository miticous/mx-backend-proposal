import MemberService from './MemberService';

const MemberController = {
  get: async (req, res, next) => {
    try {
      const members = await MemberService.getMembers();

      res.status(200).json(members);
    } catch (error) {
      next(error);
    }
  },
};

export default MemberController;
