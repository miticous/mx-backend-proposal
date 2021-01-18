import models from '../../../models';

const { MemberTypes } = models;

const MemberTypesService = {
  getTypes: async () => {
    const memberTypes = await MemberTypes.findAll();

    return memberTypes;
  },
};

export default MemberTypesService;
