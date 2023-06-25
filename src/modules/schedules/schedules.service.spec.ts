import { Repository } from 'typeorm';
import { User } from './dto/schedule.dto';
import { UsersService } from './schedules.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Role } from '../../common/enums/role.enum';

const users: User[] = [
  {
    id: 1,
    email: 'testing1@test.cl',
    password: 'test',
    rol: 'alumno' as Role,
    absenceCount: 0,
  },
  {
    id: 2,
    email: 'testing1@test.cl',
    password: 'test',
    rol: 'alumno' as Role,
    absenceCount: 0,
  },
];

const userFieldsMock = {
  email: 'testing@test.cl',
  password: 'test',
};

const userMock = {
  id: 4,
  email: 'testing4@test.cl',
  password: 'test',
  rol: 'alumno' as Role,
  absenceCount: 0,
};

describe('UsersService', () => {
  let usersService: UsersService;
  let repository: Repository<User>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();
    usersService = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should return for findAll()', async () => {
    jest.spyOn(repository, 'find').mockResolvedValueOnce(users);
    expect(await usersService.findAll()).toEqual(users);
  });

  it('Repository method save() should be called', async () => {
    const spy = jest.spyOn(repository, 'save').mockImplementation(jest.fn());
    usersService.save(userFieldsMock);
    expect(spy).toHaveBeenCalled();
  });

  it('updateRole() should call findOne()', async () => {
    jest.spyOn(repository, 'update').mockImplementation(jest.fn());
    const findOneSpy = jest
      .spyOn(repository, 'findOne')
      .mockResolvedValue(userMock);

    usersService.updateRole('test', Role.alumno);
    expect(findOneSpy).toHaveBeenCalled();
  });

  it('punishUser() should call findOne()', async () => {
    jest.spyOn(repository, 'update').mockImplementation(jest.fn());
    const findOneSpy = jest
      .spyOn(repository, 'findOne')
      .mockResolvedValue(userMock);

    usersService.updateRole('test', Role.alumno);
    expect(findOneSpy).toHaveBeenCalled();
  });
});
