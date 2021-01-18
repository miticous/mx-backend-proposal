import MemberTypesService from './MemberTypesService';

const MemberTypesController = {
  get: async (req, res, next) => {
    try {
      const memberTypes = await MemberTypesService.getTypes();

      res.status(200).json(memberTypes);
    } catch (error) {
      next(error);
    }
  },
};

export default MemberTypesController;
